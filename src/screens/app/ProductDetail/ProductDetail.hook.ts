import {useDispatch} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";

const Data={
    "id": 5,
    "categoryId": 1,
    "brandId": 2,
    "code":"AN2-A1610BcM",
    "name": "ÁO Nỉ Da Cá Text Printed Note 1610",
    "price": 395000,
    "description": "<div class=\"description-productdetail\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<h2><strong>ÁO Nỉ Da Cá Text Printed Note 1610</strong></h2><p><strong>KIỂU DÁNG:</strong>&nbsp;Slim fit<br>Phom áo ôm vừa vặn, trẻ trung, mặc rất thoải mái. Diện&nbsp;đơn hoặc mặc đôi đều phù hợp</p><p><strong>CHẤT LIỆU:&nbsp;Nỉ da cá ( 35% cotton &amp; 65% polyester)&nbsp;</strong></p><p>- Là chất liệu dày dặn có 2 mặt.&nbsp;</p><p>+ Mặt bên ngoài mềm mịn, được bao phủ bởi một lớp lông ngắn làm tăng khả năng giữ ấm, cân bằng nhiệt và chắn gió cực tốt.&nbsp;</p><p>+ Mặt trong dệt kim với các sợi vải móc chồng lên nhau hình vảy cá tạo hiệu ứng bắt mắt, bề mặt có nhiều lỗ thoáng khí, luôn tạo cảm giác thông thoáng, mặc ấm mà không bị hầm nóng hay khó chịu.</p><p>- Vải có độ co giãn tốt mang đến cảm giác thoải mái, dễ chịu.</p><p>- Bề mặt vải nỉ cá không xơ và xù như vải nỉ thông thường, dẫn đến ít bám bẩn và ít xù lông hơn.</p><p><strong>ĐẶC ĐIỂM NỔI BẬT</strong></p><p>- Chữ Note với style sáng tạo, độc đáo tạo điểm nhấn ấn tượng trước ngực.</p><p>- Sử dụng công nghệ in vinyl chữ in sắc nét, bền màu.</p><p>- Tay áo với hình in nhỏ gọn, tinh tế.</p><p>-&nbsp;Cổ áo, tay áo bo thun dệt gân mềm mại, giữ ấm tốt.</p><p><strong>HƯỚNG DẪN BẢO QUẢN</strong></p><p>- Nên giặt bằng nước lạnh<br>- Vải nỉ được tạo thành từ những sợi lông tơ vì vậy, nên giặt nhẹ nhàng, hạn chế chà mạnh vải.<br>- Nếu giặt máy, nên chọn chế độ giặt nhẹ, độ vắt vừa phải.<br>- Không nên sử dụng chất giặt tẩy.&nbsp;</p>\n" +
        "\t\t\t\t\t\t\t\t\t</div>",
    "accessories": "Sạc, sách hướng dẫn sử dụng",
    "totalSold": 0,
    "imageUrl": [
        "https://product.hstatic.net/200000201725/product/_k9a7456_96928ff4cdd142b49df9ebca7f146d45_master.jpg",
        "https://product.hstatic.net/200000201725/product/45_c9590149e2a947b1be9200c3989e9563_master.jpg",
        "https://product.hstatic.net/200000201725/product/_k9a7459_ece8b6674f624cb592f1f9c098f61a8d_master.jpg",
        "https://product.hstatic.net/200000201725/product/z3881807868950_dffc67491a682a513aea9c17d563835e_ff6835fb502c449991eb576549a78c07_master.jpg"
    ],
    "createdDate": "2022-06-29T13:43:01.000Z",
    "size": [
        {
            "count": 34,
            "propertyName": "M",
            "value": "M"
        },
        {
            "count": 35,
            "propertyName": "Ổ cứng",
            "value": "512GB M.2 NVMe™ PCIe® 3.0 SSD"
        },
        {
            "count": 36,
            "propertyName": "L",
            "value": "L"
        },
        {
            "count": 37,
            "propertyName": "XXL",
            "value": "XXL"
        },
    ],
    "colors": [
        {
            "id": 1,
            "value": "Đen"
        },
        {
            "id": 2,
            "value": "Đen"
        },
        ]
}
export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const {params}=useRoute()
    const [data,setData]=useState<any>()
    useEffect(()=>{
        setData(Data)
    },[])
    return{
        nav,
        data
    }
}
