import { mount } from '@vue/test-utils';
import AnimatedCard from '@/components/AnimatedCard.vue';

describe('AnimatedCard', () => {
  it('should have a color', () => {
    console.log('should have a color');
    const spy = jest.spyOn(global.console, 'error');
    mount(AnimatedCard, { propsData: null });
    expect(spy).toBeCalledWith(
      expect.stringMatching(/^\[Vue warn\]: Missing required prop: "color/),
    );
    spy.mockReset();
  });

  it('should be a valid color', () => {
    console.log('should be a valid color');
    const spy = jest.spyOn(global.console, 'error');
    mount(AnimatedCard, { propsData: { color: 'cyan' } });
    expect(spy).toBeCalledWith(
      expect.stringMatching(
        /^\[Vue warn\]: Invalid prop: custom validator check failed for prop "color/,
      ),
    );
    spy.mockReset();
  });
});
