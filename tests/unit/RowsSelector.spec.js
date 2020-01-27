import { shallowMount } from '@vue/test-utils'
import RowsSelector from '@/components/dashboard/RowsSelector.vue'

describe('RowsSelector.vue', () => {
  it('is a Vue component', () => {
    const wrapper = shallowMount(RowsSelector, {
      propsData: {
        value: 1
      }
    })

    expect(wrapper.isVueInstance()).toEqual(true)
  })

  it('contain props value', () => {
    const wrapper = shallowMount(RowsSelector, {
      propsData: {
        value: 1
      }
    })

    expect(wrapper.vm.value).toBeDefined()
    expect(wrapper.vm.value).toEqual(1)

    wrapper.setProps({ value: 2 })
    expect(wrapper.vm.value).toEqual(2)
  })
})
