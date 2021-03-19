import VueRouter from 'vue-router'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import navbar from '@/components/navbar.vue'

const mockFunc = jest.fn()
const mockFunc2 = jest.fn()
const $router = {
  push: mockFunc
}
const $store = {
  dispatch: mockFunc2
}
const localVue = createLocalVue()
localVue.use(VueRouter)

const wrapper = shallowMount(navbar, {mocks: {$router, $store}})
wrapper.setData({searchTerm: 'when'})
describe('navbar.vue', () => {
    it('passed', () => {
      expect(wrapper.vm.onLogout()).toBe()
      expect(wrapper.vm.menuToggle()).toBe()
      wrapper.setData({filterType: 'question'})
      expect(wrapper.vm.onSearch()).toBe()
    })
    it('passed', () => {
      wrapper.setData({filterType: 'answer'})
      expect(wrapper.vm.onSearch()).toBe()
    })
    it('passed', () => {
      wrapper.setData({filterType: 'user'})
      expect(wrapper.vm.onSearch()).toBe()
    })
  })