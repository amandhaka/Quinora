import { shallowMount } from '@vue/test-utils'
import commentComponentHome from '@/components/commentComponentHome.vue'

const mockFunc = jest.fn()
const $store = {
  dispatch: mockFunc
}

describe('commentComponentHome.vue', () => {
  it('passed', () => {
    const wrapper = shallowMount(commentComponentHome, {mocks: {$store}})
    wrapper.setData({ currentUser: 'jack_dawson' })
    expect(wrapper.vm.deleteComment(2)).toBe()
  })
})