import { shallowMount } from '@vue/test-utils'
import addCredentials from '@/components/addCredentials.vue'
import axios from 'axios'

const mockFunc = jest.fn()
const $store = {
  dispatch: mockFunc,
  state: {
      userDetails: {username: 'M', firstName: 's', lastName: 'd', state: 'j', city: 'k', country: 'i', employment: [{position: 'd', organization: 's', startYear: 'j', endYear: 'p'}], education: [{school: 'h', primaryDetail: 'j', startYear: 'g', degree: 'd'}]}
  }
}

describe('addCredentials.vue', () => {
  it('passed', () => {
    const wrapper = shallowMount(addCredentials, {mocks: {$store}})
    expect(wrapper.vm.saveToDatabase()).toBe()
    wrapper.setData({ positionname: 'devIntern' })
    wrapper.setData({ companyname: 'avniro' })
    wrapper.setData({ employmentDetails: [{}] })
    expect(wrapper.vm.saveEmploymentDetails()).toBe()
    expect(wrapper.vm.saveEducationDetails()).toBe()
  })
})