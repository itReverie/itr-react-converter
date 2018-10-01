export const customDropdownStyles = {
    option: (base, state) => ({
      ...base,
      color:'#979797',
      background: state.isFocused ? '#F0EEEE' : '#ffffff' ,
      padding: 10,
    }),
    control: () => ({
      width: 200,
      display: 'flex',
      border: '2px solid #979797'
    }),
    singleValue: (base, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...base, opacity, transition };
    }
  }