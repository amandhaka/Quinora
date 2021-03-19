import { shallowMount } from '@vue/test-utils'
import commentsInputWidget from '@/components/commentsInputWidget.vue'

const mockFunc = jest.fn()
const mockFuncAlert = jest.fn()
const $store = {
  dispatch: mockFunc
}
const $alert = mockFuncAlert

describe('commentsInputWidget.vue', () => {
  it('passed', () => {
    const wrapper = shallowMount(commentsInputWidget, {mocks: {$store, $alert}})
    wrapper.setData({ commentText: 'This is my comment.' })
    expect(wrapper.vm.onSubmit())
  })

  it('passed', () => {
    const wrapper = shallowMount(commentsInputWidget, {mocks: {$store, $alert}})
    wrapper.setData({ commentText: 'This is my comment.' })
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