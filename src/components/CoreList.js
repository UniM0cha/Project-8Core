import Core from './Core';

const CoreList = ({ item = null }) => {
  return (
    <>
      <Core core={1} data={item && item.cores ? item.cores[1] : null} />
      <Core core={2} data={item && item.cores ? item.cores[2] : null} />
      <Core core={3} data={item && item.cores ? item.cores[3] : null} />
      <Core core={4} data={item && item.cores ? item.cores[4] : null} />
      <Core core={5} data={item && item.cores ? item.cores[5] : null} />
      <Core core={6} data={item && item.cores ? item.cores[6] : null} />
      <Core core={7} data={item && item.cores ? item.cores[7] : null} />
      <Core core={8} data={item && item.cores ? item.cores[8] : null} />
    </>
  );
};

export default CoreList;
