import { shallowMount } from '@vue/test-utils'
import questionsInputWidget from '@/components/questionsInputWidget.vue'

const mockFunc = jest.fn()
const mockFuncAlert = jest.fn()
const $store = {
  dispatch: mockFunc
}
const $alert = mockFuncAlert

describe('questionsInputWidget.vue', () => {
  it('passed', () => {
    const wrapper = shallowMount(questionsInputWidget, {mocks: {$store, $alert}})
    wrapper.setData({ questionText: 'This is my question. This is my question. This is my question.' })
    wrapper.setData({ questionTitle: 'This is my question. This is my question. This is my question. This is my question.' })
    wrapper.setData({ category: 'movies' })
    expect(wrapper.vm.validate()).toBe(true)
    expect(wrapper.vm.onSubmit())
  })

  it('passed', () => {
    const wrapper = shallowMount(questionsInputWidget, {mocks: {$store, $alert}})
    wrapper.setData({ questionText: 'This is my comment.' })
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

  it('passed', () => {
    const wrapper = shallowMount(questionsInputWidget, {mocks: {$store, $alert}})
    wrapper.setData({ questionText: 'This is my question. This is my question. This is my question.' })
    wrapper.setData({ questionTitle: 'This' })
    wrapper.setData({ category: 'movies' })
    expect(wrapper.vm.validate()).toBe(false)
    expect(wrapper.vm.onSubmit())
  })
  
  it('passed', () => {
    const wrapper = shallowMount(questionsInputWidget, {mocks: {$store, $alert}})
    wrapper.setData({ questionText: 'This is my question.' })
    wrapper.setData({ questionTitle: 'This is my question.' })
    wrapper.setData({ category: 'movies' })
    expect(wrapper.vm.validate()).toBe(false)
    expect(wrapper.vm.onSubmit())
  })
})