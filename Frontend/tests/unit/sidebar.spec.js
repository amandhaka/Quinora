import { shallowMount } from '@vue/test-utils'
import sidebar from '@/components/sidebar.vue'
import { mapGetters } from 'vuex'

const mockFunc = jest.fn()
const $store = {
  dispatch: mockFunc,
  getters: {
    getCategoryList: ['movies', 'space']
  }
}


const wrapper = shallowMount(sidebar, {mocks: {$store}})
describe('commentsInputWidget.vue', () => {
    it('passed', () => {
      const event = {
        target: {
          id: 2
        }
      }
      expect(wrapper.vm.categorySelect(event)).toBe()
    })
})