import ReactEcharts from "echarts-for-react";
import styled, { useTheme } from "styled-components";

const ChartContainer = styled.div`
  height: 160px;
  width: 280px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: 1px solid teal;
  overflow: hidden;
`;

function Graph({ chartData, chartTitle }) {
  const theme = useTheme();

  const option = {
    animationDuration: 2000,
    height: "20%",
    grid: { show: false },
    xAxis: {
      type: "category",
      show: false,
      splitLine: {
        show: false,
      },
      showGrid: false,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      data: [...Object.keys(chartData)],
    },
    yAxis: {
      type: "value",
      show: false,
      splitLine: {
        show: false,
      },
      showGrid: false,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    series: [
      {
        data: [...Object.values(chartData)],
        type: "line",
        showSymbol: false,
      },
    ],
    title: {
      text: chartTitle,
      textStyle: {
        color: theme.main.color,
        fontSize: "11px",
        fontWeight: "normal",
        fontFamily: "Fuzzy Bubbles",
      },
    },
  };

  return (
    <ChartContainer>
      <ReactEcharts option={option} />
    </ChartContainer>
  );
}

export default Graph;
