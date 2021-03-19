import { shallowMount } from '@vue/test-utils'
import questionComponentHome from '@/components/questionComponentHome.vue'

const mockFunc = jest.fn()
const $store = {
  dispatch: mockFunc
}

describe('questionComponentHome.vue', () => {
  it('passed', () => {
    const wrapper = shallowMount(questionComponentHome, {mocks: {$store}}, {propsData: {
        question: 'This is my question',
        category: 'movies',
        src: 'hello.jpeg',
        id: 2,
        createdAt: '18 Mar 2021 05:29:27'
    }})
    const event= { target: {
        id: 3
    }}
    expect(wrapper.vm.goToQuestions(event)).toBe()
  })
})