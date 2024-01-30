import RingLoader from 'react-spinners/RingLoader';

export const Loader = () => {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
      <RingLoader
        color="#02e30de7"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier="1"
      />
    </div>
  );
};
