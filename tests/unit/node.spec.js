import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Diagram from "@/Diagram.vue";
import Node from "@/lib/Node.vue";
import EditNodeModal from "@/lib/EditNodeModal.vue";

const makeNode = (overrides = {}) => ({
  id: "1",
  width: 100,
  height: 50,
  shape: "rectangle",
  stroke: "",
  strokeWeight: 1,
  point: { x: 10, y: 10 },
  content: { text: "test", url: "", color: "" },
  ...overrides
});

describe("Diagram.vue", () => {
  const defaultProps = {
    width: 800,
    height: 600,
    scale: "1",
    nodes: [],
    links: [],
    editable: false,
    labels: {}
  };

  it("renders without crashing", () => {
    const wrapper = shallowMount(Diagram, { propsData: defaultProps });
    expect(wrapper.exists()).to.be.true;
  });

  it("updateNodeLocation does not crash with unknown id", () => {
    const wrapper = shallowMount(Diagram, {
      propsData: { ...defaultProps, nodes: [makeNode()] }
    });
    expect(() => {
      wrapper.vm.updateNodeLocation({ id: "nonexistent", x: 0, y: 0 });
    }).not.to.throw();
  });

  it("updateLinkLocation does not crash with unknown id", () => {
    const wrapper = shallowMount(Diagram, {
      propsData: {
        ...defaultProps,
        nodes: [makeNode({ id: "1" }), makeNode({ id: "2" })],
        links: [{ id: "L1", source: "1", destination: "2", point: { x: 50, y: 50 } }]
      }
    });
    expect(() => {
      wrapper.vm.updateLinkLocation({ id: "nonexistent", x: 0, y: 0 });
    }).not.to.throw();
  });

  it("commitDest does not crash with invalid node ids", () => {
    const wrapper = shallowMount(Diagram, {
      propsData: { ...defaultProps, nodes: [] }
    });
    expect(() => {
      wrapper.vm.commitDest("nonexistent");
    }).not.to.throw();
  });
});

describe("Node.vue - safeUrl", () => {
  const mountNode = url =>
    shallowMount(Node, {
      propsData: {
        node: makeNode({ content: { text: "x", url, color: "" } }),
        editable: false,
        createLinkMode: false,
        selected: false,
        labels: {},
        scale: "1",
        rWidth: 1,
        rHeight: 1
      }
    });

  it("allows https:// URLs", () => {
    const wrapper = mountNode("https://example.com");
    expect(wrapper.vm.safeUrl).to.equal("https://example.com");
  });

  it("allows http:// URLs", () => {
    const wrapper = mountNode("http://example.com");
    expect(wrapper.vm.safeUrl).to.equal("http://example.com");
  });

  it("blocks javascript: URLs", () => {
    const wrapper = mountNode("javascript:alert('xss')");
    expect(wrapper.vm.safeUrl).to.equal("");
  });

  it("returns empty string when url is empty", () => {
    const wrapper = mountNode("");
    expect(wrapper.vm.safeUrl).to.equal("");
  });
});

describe("EditNodeModal.vue", () => {
  it("copies node prop instead of sharing reference", () => {
    const node = makeNode({ content: { text: "original", url: "", color: "" } });
    const wrapper = shallowMount(EditNodeModal, {
      propsData: { isActive: true, node }
    });
    wrapper.vm.newNode.content.text = "modified";
    expect(node.content.text).to.equal("original");
  });

  it("updates newNode when node prop changes", async () => {
    const node = makeNode({ content: { text: "first", url: "", color: "" } });
    const wrapper = shallowMount(EditNodeModal, {
      propsData: { isActive: true, node }
    });
    const newNode = makeNode({ content: { text: "second", url: "", color: "" } });
    wrapper.setProps({ node: newNode });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.newNode.content.text).to.equal("second");
  });
});
