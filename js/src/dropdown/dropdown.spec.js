import Dropdown from './dropdown'
import Popper from 'popper.js'

/** Test helpers */
import { getFixture, clearFixture } from '../../tests/helpers/fixture'

describe('Dropdown', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('VERSION', () => {
    it('should return plugin version', () => {
      expect(Dropdown.VERSION).toEqual(jasmine.any(String))
    })
  })

  describe('Default', () => {
    it('should return plugin default config', () => {
      expect(Dropdown.Default).toEqual(jasmine.any(Object))
    })
  })

  describe('DefaultType', () => {
    it('should return plugin default type config', () => {
      expect(Dropdown.DefaultType).toEqual(jasmine.any(Object))
    })
  })

  describe('toggle', () => {
    it('should toggle a dropdown', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      const dropdown = new Dropdown(btnDropdown)

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        expect(dropdownEl.classList.contains('show')).toEqual(true)
        expect(btnDropdown.getAttribute('aria-expanded')).toEqual('true')
        done()
      })

      dropdown.toggle()
    })

    it('should not toggle a dropdown if the element is disabled', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button disabled href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      const dropdown = new Dropdown(btnDropdown)

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        throw new Error('should not throw shown.bs.dropdown event')
      })

      dropdown.toggle()

      setTimeout(() => {
        expect().nothing()
        done()
      })
    })

    it('should not toggle a dropdown if the element contains .disabled', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle disabled" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      const dropdown = new Dropdown(btnDropdown)

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        throw new Error('should not throw shown.bs.dropdown event')
      })

      dropdown.toggle()

      setTimeout(() => {
        expect().nothing()
        done()
      })
    })

    it('should not toggle a dropdown if the menu is shown', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu show">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      const dropdown = new Dropdown(btnDropdown)

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        throw new Error('should not throw shown.bs.dropdown event')
      })

      dropdown.toggle()

      setTimeout(() => {
        expect().nothing()
        done()
      })
    })

    it('should not toggle a dropdown if show event is prevented', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      const dropdown = new Dropdown(btnDropdown)

      dropdownEl.addEventListener('show.bs.dropdown', e => {
        e.preventDefault()
      })

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        throw new Error('should not throw shown.bs.dropdown event')
      })

      dropdown.toggle()

      setTimeout(() => {
        expect().nothing()
        done()
      })
    })
  })

  describe('show', () => {
    it('should show a dropdown', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      const dropdown = new Dropdown(btnDropdown)

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        expect(dropdownEl.classList.contains('show')).toEqual(true)
        done()
      })

      dropdown.show()
    })

    it('should not show a dropdown if the element is disabled', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button disabled href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      const dropdown = new Dropdown(btnDropdown)

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        throw new Error('should not throw shown.bs.dropdown event')
      })

      dropdown.show()

      setTimeout(() => {
        expect().nothing()
        done()
      })
    })

    it('should not show a dropdown if the element contains .disabled', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle disabled" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      const dropdown = new Dropdown(btnDropdown)

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        throw new Error('should not throw shown.bs.dropdown event')
      })

      dropdown.show()

      setTimeout(() => {
        expect().nothing()
        done()
      })
    })

    it('should not show a dropdown if the menu is shown', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu show">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      const dropdown = new Dropdown(btnDropdown)

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        throw new Error('should not throw shown.bs.dropdown event')
      })

      dropdown.show()

      setTimeout(() => {
        expect().nothing()
        done()
      })
    })

    it('should not show a dropdown if show event is prevented', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      const dropdown = new Dropdown(btnDropdown)

      dropdownEl.addEventListener('show.bs.dropdown', e => {
        e.preventDefault()
      })

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        throw new Error('should not throw shown.bs.dropdown event')
      })

      dropdown.show()

      setTimeout(() => {
        expect().nothing()
        done()
      })
    })
  })

  describe('dispose', () => {
    it('should dispose dropdown', () => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdown = new Dropdown(btnDropdown)

      expect(dropdown._popper).toBeNull()
      expect(dropdown._menu).toBeDefined()
      expect(dropdown._element).toBeDefined()

      dropdown.dispose()

      expect(dropdown._menu).toBeNull()
      expect(dropdown._element).toBeNull()
    })

    it('should dispose dropdown with popper.js', () => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdown = new Dropdown(btnDropdown)

      dropdown.toggle()

      expect(dropdown._popper).toBeDefined()
      expect(dropdown._menu).toBeDefined()
      expect(dropdown._element).toBeDefined()

      spyOn(Popper.prototype, 'destroy')

      dropdown.dispose()

      expect(dropdown._popper).toBeNull()
      expect(dropdown._menu).toBeNull()
      expect(dropdown._element).toBeNull()
      expect(Popper.prototype.destroy).toHaveBeenCalled()
    })
  })

  describe('update', () => {
    it('should call popper.js and detect navbar on update', () => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdown = new Dropdown(btnDropdown)

      dropdown.toggle()

      expect(dropdown._popper).toBeDefined()

      spyOn(dropdown._popper, 'scheduleUpdate')
      spyOn(dropdown, '_detectNavbar')

      dropdown.update()

      expect(dropdown._popper.scheduleUpdate).toHaveBeenCalled()
      expect(dropdown._detectNavbar).toHaveBeenCalled()
    })

    it('should just detect navbar on update', () => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdown = new Dropdown(btnDropdown)

      spyOn(dropdown, '_detectNavbar')

      dropdown.update()

      expect(dropdown._popper).toBeNull()
      expect(dropdown._detectNavbar).toHaveBeenCalled()
    })
  })

  describe('data-api', () => {
    it('should not add class position-static to dropdown if boundary not set', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        expect(dropdownEl.classList.contains('position-static')).toEqual(false)
        done()
      })

      btnDropdown.click()
    })

    it('should add class position-static to dropdown if boundary not scrollParent', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown" data-boundary="viewport">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        expect(dropdownEl.classList.contains('position-static')).toEqual(true)
        done()
      })

      btnDropdown.click()
    })

    it('should show and hide a dropdown', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      let showEventTriggered = false
      let hideEventTriggered = false

      dropdownEl.addEventListener('show.bs.dropdown', () => {
        showEventTriggered = true
      })

      dropdownEl.addEventListener('shown.bs.dropdown', e => {
        expect(dropdownEl.classList.contains('show')).toEqual(true)
        expect(btnDropdown.getAttribute('aria-expanded')).toEqual('true')
        expect(showEventTriggered).toEqual(true)
        expect(e.relatedTarget).toEqual(btnDropdown)
        document.body.click()
      })

      dropdownEl.addEventListener('hide.bs.dropdown', () => {
        hideEventTriggered = true
      })

      dropdownEl.addEventListener('hidden.bs.dropdown', e => {
        expect(dropdownEl.classList.contains('show')).toEqual(false)
        expect(btnDropdown.getAttribute('aria-expanded')).toEqual('false')
        expect(hideEventTriggered).toEqual(true)
        expect(e.relatedTarget).toEqual(btnDropdown)
        done()
      })

      btnDropdown.click()
    })

    it('should not use popper.js in navbar', done => {
      fixtureEl.innerHTML = [
        '<nav class="navbar navbar-expand-md navbar-light bg-light">',
        '  <div class="dropdown">',
        '    <button href="#" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Dropdown</button>',
        '    <div class="dropdown-menu">',
        '      <a class="dropdown-item" href="#">Secondary link</a>',
        '    </div>',
        '  </div>',
        '</nav>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      const dropdownMenu = fixtureEl.querySelector('.dropdown-menu')

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        // no inline style applied by popper.js
        expect(dropdownMenu.getAttribute('style')).toEqual(null)
        done()
      })

      btnDropdown.click()
    })

    it('should not use popper.js if display set to static', done => {
      fixtureEl.innerHTML = [
        '<div class="dropdown">',
        '  <button href="#" class="btn dropdown-toggle" data-toggle="dropdown" data-display="static">Dropdown</button>',
        '  <div class="dropdown-menu">',
        '    <a class="dropdown-item" href="#">Secondary link</a>',
        '  </div>',
        '</div>'
      ].join('')

      const btnDropdown = fixtureEl.querySelector('[data-toggle="dropdown"]')
      const dropdownEl = fixtureEl.querySelector('.dropdown')
      const dropdownMenu = fixtureEl.querySelector('.dropdown-menu')

      dropdownEl.addEventListener('shown.bs.dropdown', () => {
        // popper.js add this attribute when we use it
        expect(dropdownMenu.getAttribute('x-placement')).toEqual(null)
        done()
      })

      btnDropdown.click()
    })
  })
})
