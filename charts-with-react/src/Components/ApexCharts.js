import React from "react";
import Chart from "react-apexcharts";
const ApexCharts = () => {
	
	const columLineData = {
		series: [
			{
				name: "Income",
				type: "column",
				data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
			},
			{
				name: "Revenue",
				type: "line",
				data: [20, 29, 37, 36, 44, 45, 50, 58]
			}
		],
        
		options: {
			chart: {
				height: 350,
				type: "line",
				stacked: false
			},
			dataLabels: {
				enabled: true,
                style: {
                    fontSize: '10px',
                    colors: ['#000', '#cd3212'],
                  }
			},
			stroke: {
				width: [1, 6]
			},
			title: {
				text: "XYZ - Stock Analysis (2009 - 2016)",
				align: "left",
				offsetX: 110
			},
			xaxis: {
				categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
			},
			yaxis: [
				{
					axisTicks: {
						show: true
					},
					axisBorder: {
						show: true,
						color: "#008FFB"
					},
					labels: {
						style: {
							colors: "#008FFB"
						}
					},
					title: {
						text: "Income",
						style: {
							color: "#008FFB"
						}
					},
					tooltip: {
						enabled: true
					}
				},
			]
		}
	};

    const barData = {
          
        series: [{
          data: [44, 55, 41, 64, 22, 43, 21]
        }, {
          data: [53, 32, 33, 52, 13, 44, 32]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 430
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
              },
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          tooltip: {
            shared: true,
            intersect: false
          },
          xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
            position: "bottom",
            title: {
                text: 'Test'
            },

          },
          
        },
        
      };

      const donutData = {
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      }


      const lineColumnAreaData = {
        series: [{
            name: 'TEAM A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
          }, {
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 86, 41, 56, 27, 43]
          }, {
            name: 'TEAM C',
            type: 'line',
            data: [30, 25, 36, 30, 19, 35, 64, 52, 59, 36, 39]
          }],
          options: {
            chart: {
              height: 350,
              type: 'line',
              stacked: false,
            },
            stroke: {
              width: [0, 2, 5],
              curve: 'smooth'
            },
            
            fill: {
              opacity: [0.85, 0.25, 1],
              gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
              }
            },
            labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
              '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
            ],
            markers: {
              size: 0
            },
            xaxis: {
              type: 'datetime'
            },
            yaxis: {
              title: {
                text: 'Points',
              },
              min: 0
            },
            tooltip: {
              shared: true,
              intersect: false,
              y: {
                formatter: function (y) {
                  if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                  }
                  return y;
            
                }
              }
            }
          },

      }

	return (
		<div>
			ApexCharts
			<Chart
				options={columLineData.options}
				series={columLineData.series}
				width={600}
				height={600}
			/>

            <Chart
				options={barData.options}
				type="bar"
				series={barData.series}
				width={600}
				height={600}
			/>
            
            <Chart
				options={donutData.options}
				type="donut"
				series={donutData.series}
				width={600}
				height={600}
			/>

            <Chart
				options={lineColumnAreaData.options}
				type="bar"
				series={lineColumnAreaData.series}
				width={600}
				height={600}
			/>

		</div>
	);
};

export default ApexCharts;
