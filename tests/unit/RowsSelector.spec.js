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

  it('contain props list', () => {
    const wrapper = shallowMount(RowsSelector, {
      propsData: {
        value: 1
      }
    })

    expect(wrapper.vm.list).toBeDefined()
    expect(wrapper.vm.list).toEqual([2, 5, 10, 20])

    wrapper.setProps({ list: [2, 3, 4, 5] })
    expect(wrapper.vm.list).toEqual([2, 3, 4, 5])
  })

  it('calling .selected method generate input event', () => {
    const wrapper = shallowMount(RowsSelector, {
      propsData: {
        value: 1
      }
    })

    expect(wrapper.vm.selected).toBeDefined()
    wrapper.vm.selected(3)
    expect(wrapper.emitted('input').length).toEqual(1)
    expect(wrapper.emitted('input')[0]).toEqual([3])
  })

  it('correctly generates quantity the number of list', () => {
    const wrapper = shallowMount(RowsSelector, {
      propsData: {
        value: 1
      }
    })

    expect(wrapper.find('select.custom-select').findAll('option').length).toEqual(4)
  })
})
