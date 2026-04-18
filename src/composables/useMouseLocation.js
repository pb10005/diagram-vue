export function useMouseLocation() {
  function getLocation(e) {
    if (e.touches) {
      return [e.touches[0].pageX, e.touches[0].pageY]
    }
    return [e.pageX, e.pageY]
  }
  return { getLocation }
}
