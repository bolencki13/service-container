import { Container } from '../../src/Container'
import { Instance } from '../../src/bindings/Instance'

describe('Container: fake()', function () {
  it('should add the fake binding to the collection of fake bindings', function () {
    const value = {}
    const container = new Container()

    this.assert.notProperty(container.fakes, 'testing')

    container.fake('testing', value)

    this.assert.hasAnyKeys(container.fakes, ['testing'])
    this.assert.instanceOf(container.fakes.get('testing'), Instance)
  })

  it('should replace the fake binding in the collection of fake bindings', function () {
    const firstValue = {}
    const secondValue = {}

    const container = new Container()

    container.fake('testing', firstValue)

    const firstFake = container.fakes.get('testing')

    container.fake('testing', secondValue)

    this.assert.hasAnyKeys(container.fakes, ['testing'])
    this.assert.instanceOf(container.fakes.get('testing'), Instance)
    this.assert.notEqual(container.fakes.get('testing'), firstFake)
  })
})
