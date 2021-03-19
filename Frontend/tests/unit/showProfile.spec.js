import { shallowMount } from '@vue/test-utils'
import showProfile from '@/components/showProfile.vue'

const mockFunc = jest.fn()
const uploadMockFunc = jest.fn()
const $store = {
  dispatch: mockFunc
}
const document = {
  querySelector: {
    addEventListener: function(change, callback){
      console.log(change)
    }
  }
}

describe('showProfile.vue', () => {
  it('passed', () => {
    const wrapper = shallowMount(showProfile, {mocks: {$store, document}}, {methods: { upload: uploadMockFunc }})
    wrapper.find('#picture').trigger('click')
    expect(wrapper.vm.uploadMockFunc).toBe()
  })
})