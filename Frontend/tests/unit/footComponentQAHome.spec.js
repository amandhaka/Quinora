import { shallowMount } from '@vue/test-utils'
import footComponentQAHome from '@/components/footComponentQAHome.vue'

const mockFunc = jest.fn()
const $store = {
  dispatch: mockFunc
}

const wrapper = shallowMount(footComponentQAHome, {mocks: {$store}}, {propsData: {
  upvotes: 10,
  downvotes: 20,
  comments: 30,
  cid: "1",
  answerId: 2,
  commentsData: ["Sup"]
}})

describe('footComponentQAHome.vue', () => {
  it('passed', () => {
    wrapper.setData({ listCommentsShow: false })
    expect(wrapper.vm.toggleComments())
    expect(wrapper.vm.reactionLike())
    expect(wrapper.vm.reactionDislike())
  })

  it('passed', () => {
    wrapper.setData({ listCommentsShow: true })
    expect(wrapper.vm.toggleComments())
    expect(wrapper.vm.reactionDislike())
    expect(wrapper.vm.reactionLike())
  })
})