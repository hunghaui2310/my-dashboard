import type { FC } from 'react';
import { Card } from 'antd';
import TablePage from "@/pages/components/table";

const Lands: FC<{ loading: boolean }> = ({ loading }) => {

  const fetchData = function () {

  }

  return (
    <Card loading={loading}>
      <TablePage></TablePage>
    </Card>
  )
};

export default Lands;
