function _fireEvent(wrapper, event, eventObject = {}) {

  wrapper.getDOMNode().dispatchEvent(event, eventObject);
}

export function fireClickEvent(wrapper) {
  _fireEvent(wrapper, 'click', );
}

export function fireChangeEvent(wrapper, data) {
  let eventObject = { target: { value: data } };
  _fireEvent(wrapper, 'change', eventObject);
}