"use client";

import * as Slider from '@radix-ui/react-slider';

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

const Sliders: React.FC<SliderProps> = ({
  value = 1,
  onChange
}) => {

  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <Slider.Root
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume"
      className='relative flex items-center select-none touch-none w-full h-10'
    >
      <Slider.Track
        className='bg-neutral-600 relative grow rounded-full h-[3px]'
      >
        <Slider.Range
          className='absolute bg-white rounded-full h-full'
        >
        </Slider.Range>
      </Slider.Track>
    </Slider.Root>
  )
}

export default Sliders;