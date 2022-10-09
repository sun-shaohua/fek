// EventTarget.addEventListener() 添加监听
// EventTarget.dispatchEvent()
// EventTarget.removeEventListener()
//1、构造方法 CustomerEvent() 创建一个新的 CustomEvent 对象。
// event = = new CustomEvent(typeArg ,customEventInit)

const TEST_CHANGE_EVENT = 'test:change_event'
const dispatch = (detail: string) => {
    globalThis.dispatchEvent(new CustomEvent(TEST_CHANGE_EVENT, {detail}))
}
