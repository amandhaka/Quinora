
import { shallowMount } from '@vue/test-utils'
import tabs from '@/components/tabs.vue'
import { mapGetters } from 'vuex'
import questionComponentHome from '@/components/questionComponentHome.vue'

const mockFunc = jest.fn()
const $store = {
  dispatch: mockFunc,
  getters: {
    getCurrentUserDetails: {username: 'M', firstName: 's', lastName: 'd', state: 'j', city: 'k', country: 'i', employment: [{position: 'd', organization: 's', startYear: 'j', endYear: 'p'}], education: [{school: 'h', primaryDetail: 'j', startYear: 'g', degree: 'd'}]},
    getQuestionListForUser: {questionText: 'item.questionText', questionImage: 'item.questionImage', questionId: 'item.questionId', category: 'item.category', createdAt: 'item.createdAt'}
  }
}

const mockFunc2 = jest.fn()

const wrapper = shallowMount(tabs, {mocks: {$store}})

wrapper.setData({ firstName: 'riya' })
wrapper.setData({ lastName: 'Srivastava' })
wrapper.setData({ profession: 'Dev Intern' })
wrapper.setData({ city: 'Lucknow' })
wrapper.setData({ state: 'Uttar Pradesh' })
wrapper.setData({ country: 'India' })
wrapper.setData({ bio: 'Hey there! This is Riya Srivastava' })

describe('tabs.vue', () => {
  it('passed', () => {
    const event = {
        target: {
          value: 3
        }
    }
    wrapper.setData({ profileShow: 'false' })
    wrapper.setData({ profileDetails: 'false' })
    wrapper.setData({ profileQuestions: 'false' })
    expect(wrapper.vm.deleteQues(event)).toBe()
    expect(wrapper.vm.postData()).toBe()
    expect(wrapper.vm.profile()).toBe()
    expect(wrapper.vm.viewProfileDetails()).toBe()
    expect(wrapper.vm.viewMyQuestions()).toBe()
  })

  it('passed', () => {
    wrapper.setData({ profileShow: 'true' })
    wrapper.setData({ profileDetails: 'true' })
    wrapper.setData({ profileQuestions: 'true' })
    expect(wrapper.vm.profile()).toBe()
    expect(wrapper.vm.viewProfileDetails()).toBe()
    expect(wrapper.vm.viewMyQuestions()).toBe()
  })
})