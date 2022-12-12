import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Stats = ({ data }) => {
  useLayoutEffect(() => {
    const chart = am4core.create("chartdiv", am4charts.XYChart3D);

    chart.data = data;

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "pokemon";
    categoryAxis.title.text = "Pokemon";

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Power";

    const series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "attack";
    series.dataFields.categoryX = "pokemon";
    series.name = "Attack";
    series.tooltipText = "{name}: [bold]{valueY}[/]";

    const series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "defense";
    series2.dataFields.categoryX = "pokemon";
    series2.name = "Defense";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";

    const series3 = chart.series.push(new am4charts.ColumnSeries3D());
    series3.dataFields.valueY = "specialAttack";
    series3.dataFields.categoryX = "pokemon";
    series3.name = "Special attack";
    series3.tooltipText = "{name}: [bold]{valueY}[/]";

    const series4 = chart.series.push(new am4charts.ColumnSeries3D());
    series4.dataFields.valueY = "specialDefense";
    series4.dataFields.categoryX = "pokemon";
    series4.name = "Special defense";
    series4.tooltipText = "{name}: [bold]{valueY}[/]";

    chart.cursor = new am4charts.XYCursor();

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

export default Stats;
