import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const PieChart = ({ data }) => {
  useLayoutEffect(() => {
    const chart = am4core.create("chartdiv", am4charts.RadarChart);

    chart.data = data;

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    valueAxis.renderer.gridType = "polygons";

    const series = chart.series.push(new am4charts.RadarSeries());
    series.dataFields.valueY = "base";
    series.dataFields.categoryX = "name";
    series.name = "Stats";
    series.strokeWidth = 3;
    series.zIndex = 2;

    return () => {
      chart.dispose();
    };
  }, [data]);

  return (
    <div
      id="chartdiv"
      style={{ width: "-webkit-fill-available", height: "500px" }}
    ></div>
  );
};

export default PieChart;
