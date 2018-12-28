import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Diagram from "@/components/Diagram.vue";

describe("Node.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Diagram);
    expect(wrapper.text()).to.include(msg);
  });
});
