import { render } from "@testing-library/react";
import { mockData } from "../mockData/homeMockData";
import HomePage from "../components/HomePage/HomePage";

describe("HomePage Component", () => {
  test("renders total sales", () => {
    const { getByText } = render(<HomePage data={mockData} />);
    const totalSalesText = getByText("Total Sales");
    expect(totalSalesText).toBeInTheDocument();
  });

  //   test("renders total spend", () => {
  //     // Write similar tests for other components
  //   });

  // Add more test cases for each component in the HomePage
});
