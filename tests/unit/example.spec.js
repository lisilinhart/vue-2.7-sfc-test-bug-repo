import { mount } from '@vue/test-utils'
import RegularComponent from '@/components/RegularComponent.vue'
import CompositionApi from '@/components/CompositionApi.vue'
import SFCComponent from '@/components/SFCComponent.vue'

describe('Regular Component', () => {
  it('renders options api', () => {
    const msg = 'new message'
    const wrapper = mount(RegularComponent, {
      propsData: { msg }
    })
    expect(wrapper.html()).toMatch('new message - mounted')
  })
})

describe('Composition API Component', () => {
  it('renders composition api', () => {
    const msg = 'new message'
    const wrapper = mount(CompositionApi, {
      propsData: { msg }
    })
    expect(wrapper.html()).toMatch('new message - mounted')
  })
})

describe('SFC Component', () => {
  it('renders composition api', () => {
    const msg = 'new message'
    const wrapper = mount(SFCComponent, {
      propsData: { msg }
    })
    expect(wrapper.html()).toMatch('new message - mounted')
  })
})
