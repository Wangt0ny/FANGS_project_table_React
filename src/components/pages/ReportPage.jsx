import '../../assets/css/ReportPage.css'
import crown from '../../assets/crown.svg'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
function ReportPage() {

    let rank = [
        {
            name: '日本和牛',
            quantity: 30,
        },
        {
            name: '澳洲和牛',
            quantity: 27,
        },
        {
            name: '日本干貝',
            quantity: 23,
        },
        {
            name: '蛤蠣',
            quantity: 20,
        },
        {
            name: '貢丸',
            quantity: 15,
        },
    ]

    function displayRank() {
        return rank.map((item, index) => {
            return (
                <li key={item.name}>
                    <div className="sales-ranking-list">
                        <span className="sales-ranking-item">{item.name}  {item.quantity}</span>
                        {(index === 0) ? <img src={crown} /> : <></>}
                    </div>
                </li>)
        })
    }

    const turnoverData = [
        { month: "1月", price: 10 },
        { month: "2月", price: 20 },
        { month: "3月", price: 15 },
        { month: "4月", price: 25 },
        { month: "5月", price: 22 },
        { month: "6月", price: 30 },
        { month: "7月", price: 28 },
        { month: "8月", price: 28 },
        { month: "9月", price: 100 },
        { month: "10月", price: 3 },
        { month: "11月", price: 22 },
        { month: "12月", price: 10 },
    ];

    function foo() {
        return {
            labels: turnoverData.map(row => row.month),
            datasets: [
                {
                    label: '月營業額',
                    data: turnoverData.map(row => row.price),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }
            ]
        }
    }

    return (
        <>
            <div className="report-container">
                <div className="turnover-content">
                    <div className="turnover-info">
                        <div className="turnover-info-title">日營業額</div>
                        <div className="turnover">$22222</div>
                    </div>
                    <div className="turnover-info">
                        <div className="turnover-info-title">月營業額</div>
                        <div className="turnover">$222222</div>
                    </div>
                </div>

                <div className="bottom-content">
                    <div className="sales-ranking">
                        <div className="sales-ranking-title">銷售排行榜</div>
                        <ol>
                            {displayRank()}
                        </ol>
                    </div>

                    <div className="bar-chart-content">
                        <Bar data={foo()} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReportPage;