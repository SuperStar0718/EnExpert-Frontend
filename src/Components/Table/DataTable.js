import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Table, Pagination, Select, Button } from "antd";
import { FaSearch } from "react-icons/fa";

const DataTable = ({
  data,
  columns,
  width,
  pagination,
  selection,
  loader,
  perPage,
  Border,
  Search,
  pageStats,
  perPageDefault,
  setPerPage,
  defaultPageNo,
  setPageNo,
  SearchData,
  setSearchData,
  // selectedData,
  setSelectedData,
}) => {
  const { Option } = Select;
  const [SearchInput, setSearchInput] = useState("");
  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const HandlePagelimit = (key) => {
    console.log(key);
  };

  const rowSelection = (selectedRowKeys, selectedRows) => {
    setSelectedData(selectedRowKeys);
    // console.log(
    //   `selectedRowKeys: ${selectedRowKeys}`,
    //   "selectedRows: ",
    //   selectedRows
    // );
  };

  return (
    <>
      <div className="table-search-inp mt-30">
        {Search && (
          <Input
            placeholder="search"
            className="primary-input-search"
            value={SearchInput}
            onChange={(e) => {
              if (e.target.value !== "") {
                setSearchInput(e.target.value);
              } else {
                setSearchInput(e.target.value);
                setSearchData({
                  page: defaultPageNo,
                  perPage: perPageDefault,
                  searchString: "",
                  status: "",
                });
              }
            }}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                setSearchData({
                  page: defaultPageNo,
                  perPage: perPageDefault,
                  searchString: SearchInput,
                  status: "",
                });
              }
            }}
            suffix={
              <Button
                onClick={() => {
                  setSearchData({
                    page: defaultPageNo,
                    perPage: perPageDefault,
                    searchString: SearchInput,
                    status: "",
                  });
                }}
                type="primary"
                className="smallBtn"
                icon={<SearchOutlined />}
              />
            }
          />
        )}
      </div>
      <Table
        className="data-table"
        columns={columns}
        dataSource={data}
        pagination={
          pagination
            ? false
            : {
                nextIcon: "Next",
                prevIcon: "Prev",
                position: ["bottomright"],
                showSizeChanger: false,
                total: pageStats.totalItems,
                current: pageStats.currentPage,
                pageSize: perPageDefault,
                onChange: (page) => {
                  console.log(page);
                  setPageNo(page, perPageDefault);
                },
                showTotal: (total, range) =>
                  `${range[0]?.toLocaleString()}-${range[1]?.toLocaleString()} of ${total?.toLocaleString()} items`,
              }
        }
        scroll={{ x: 1200 }}
        // scroll={{ x: width ? width : "auto" }}
        loading={loader}
        bordered={Border ? true : false}
        rowSelection={
          setSelectedData && {
            type: "checkbox",
            onChange: rowSelection,
          }
        }
      />{" "}
      {pagination && (
        <div className="pagination">
          <div>
            {/* {pageStats?.page && pageStats?.totalPages
              ? `
          Showing Page No. ${pageStats?.page} of ${pageStats?.totalPages} ( of
            Total ${pageStats?.totalItems} Items )`
              : `( Total ${pageStats?.totalItems} Items )`} */}
            {pageStats
              ? `
          Showing 10 records per page ( of total 
             ${pageStats?.totalItems} Records )`
              : ``}
          </div>
          <Pagination
            total={pageStats?.totalItems}
            // pageSize={10}
            current={defaultPageNo}
            itemRender={itemRender}
            // showSizeChanger={false}
            onChange={(page) => {
              setPageNo(page);
            }}
          />
        </div>
      )}
    </>
  );
};

export default DataTable;
