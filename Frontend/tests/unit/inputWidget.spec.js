import { shallowMount } from '@vue/test-utils'
import inputWidget from '@/components/inputWidget.vue'

const mockFunc = jest.fn()
const mockFuncAlert = jest.fn()
const $store = {
  dispatch: mockFunc
}
const $alert = mockFuncAlert

describe('inputWidget.vue', () => {
  it('passed', () => {
    const wrapper = shallowMount(inputWidget, {mocks: {$store, $alert}})
    wrapper.setData({ answerText: 'This is my answer.' })
    expect(wrapper.vm.validate()).toBe(true)
    expect(wrapper.vm.onSubmit())
  })

  it('passed', () => {
    const wrapper = shallowMount(inputWidget, {mocks: {$store, $alert}})
    wrapper.setData({ answerText: 'answer.' })
    expect(wrapper.vm.validate()).toBe(false)
    expect(wrapper.vm.onSubmit())
  })
  
  it('passed', () => {
    const wrapper = shallowMount(inputWidget, {mocks: {$store, $alert}})
    wrapper.setData({ answerText: 'This is my answer.' })
    wrapper.setData({ imageData: '' })
    const obj = {hello: 'world'};
    const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});
    const event = {
      target: {
        files: [blob]
      }
    }
    expect(wrapper.vm.previewImage(event))
  })
})