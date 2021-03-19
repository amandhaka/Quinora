import { shallowMount } from '@vue/test-utils'
import headComponentAnswer from '@/components/headComponentAnswer.vue'

const mockFunc = jest.fn()
const mockFunc2 = jest.fn()
const $store = {
  dispatch: mockFunc
}
const $router = {
    push: mockFunc2
}
describe('headComponentAnswer.vue', () => {
  it('passed', () => {
    const wrapper = shallowMount(headComponentAnswer, {mocks: {$store, $router}}, {propsData: {
        username: 'This is my username',
    }})
    wrapper.setData({currentUser: 'wrong username'})
    const cU = 'wrong username'
    expect(wrapper.vm.goToProfile(cU)).toBe()
  })

  it('passed', () => {
    const wrapper = shallowMount(headComponentAnswer, {mocks: {$store, $router}}, {propsData: {
        username: 'jack_dawson',
    }})
    wrapper.setData({currentUser: 'jack_dawson'})
    const cU = 'jack_dawson'
    expect(wrapper.vm.goToProfile(cU)).toBe()
  })
})