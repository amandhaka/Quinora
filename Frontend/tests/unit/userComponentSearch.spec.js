import { shallowMount } from '@vue/test-utils'
import userComponentSearch from '@/components/userComponentSearch.vue'

const mockFunc = jest.fn()
const mockFunc2 = jest.fn()
const $store = {
  dispatch: mockFunc
}
const $router = {
    push: mockFunc2
}

const wrapper = shallowMount(userComponentSearch, {mocks: {$store, $router}}, {propsData: {
    username: 'This is my username'
}})

describe('userComponentSearch.vue', () => {
  it('passed', () => {
    expect(wrapper.vm.takeToProfile(wrapper.username)).toBe()
  })
  it('passed', () => {
    expect(wrapper.vm.takeToProfile(wrapper.username)).toBe()
  })
})