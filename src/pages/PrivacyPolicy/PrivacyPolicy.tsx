import { Link } from 'react-router-dom'

export const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Chính Sách Bảo Mật</h1>
      <p>
        <strong>Cập nhật lần cuối: 01/05/2025</strong>
      </p>

      <p>
        Tại <strong>Bếu Béo Accessory</strong>, chúng tôi cam kết bảo vệ quyền riêng tư của bạn và đảm bảo an toàn cho
        thông tin cá nhân của bạn. Chính Sách Bảo Mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ
        thông tin của bạn khi bạn sử dụng trang web{' '}
        <a href="https://react-authentication-example.vercel.app">https://react-authentication-example.vercel.app</a>{' '}
        ("Trang web") và các dịch vụ của chúng tôi (gọi chung là "Dịch vụ"). Bằng cách truy cập hoặc sử dụng Dịch vụ,
        bạn đồng ý với các điều khoản của Chính Sách Bảo Mật này.
      </p>

      <h2>1. Thông Tin Chúng Tôi Thu Thập</h2>
      <p>
        Chúng tôi thu thập thông tin mà bạn cung cấp trực tiếp, thông tin được thu thập tự động và thông tin từ bên thứ
        ba. Các loại thông tin chúng tôi có thể thu thập bao gồm:
      </p>

      <h3>1.1. Thông Tin Cá Nhân Bạn Cung Cấp</h3>
      <ul>
        <li>
          <strong>Thông Tin Tài Khoản</strong>: Khi bạn đăng ký hoặc đăng nhập bằng email và mật khẩu, chúng tôi thu
          thập địa chỉ email và, nếu có, tên của bạn.
        </li>
        <li>
          <strong>Đăng Nhập Qua Mạng Xã Hội</strong>: Nếu bạn chọn đăng nhập bằng Google hoặc Facebook, chúng tôi có thể
          thu thập tên, địa chỉ email và ID hồ sơ (ví dụ: Google ID hoặc Facebook ID) được cung cấp bởi các dịch vụ bên
          thứ ba này.
        </li>
        <li>
          <strong>Thông Tin Khác</strong>: Bất kỳ thông tin bổ sung nào bạn tự nguyện cung cấp, chẳng hạn như phản hồi
          hoặc thông tin gửi qua biểu mẫu liên hệ.
        </li>
      </ul>

      <h3>1.2. Thông Tin Được Thu Thập Tự Động</h3>
      <ul>
        <li>
          <strong>Dữ Liệu Sử Dụng</strong>: Chúng tôi thu thập thông tin về cách bạn tương tác với Dịch vụ, chẳng hạn
          như các trang đã truy cập, thời gian trên Trang web và các hành động thực hiện (ví dụ: nhấp vào nút đăng
          nhập).
        </li>
        <li>
          <strong>Thông Tin Thiết Bị và Trình Duyệt</strong>: Chúng tôi thu thập chi tiết về thiết bị của bạn, bao gồm
          địa chỉ IP, loại trình duyệt, hệ điều hành và mã định danh thiết bị.
        </li>
        <li>
          <strong>Cookies và Công Nghệ Theo Dõi</strong>: Chúng tôi sử dụng cookies và các công nghệ tương tự để nâng
          cao trải nghiệm của bạn, phân tích cách sử dụng và lưu trữ tùy chọn. Bạn có thể quản lý cài đặt cookie thông
          qua trình duyệt của mình.
        </li>
      </ul>

      <h3>1.3. Thông Tin Từ Bên Thứ Ba</h3>
      <ul>
        <li>
          <strong>Đăng Nhập Google</strong>: Khi bạn đăng nhập bằng Google, chúng tôi nhận được tên, địa chỉ email và
          Google ID từ Google, theo cài đặt tài khoản Google của bạn.
        </li>
        <li>
          <strong>Đăng Nhập Facebook</strong>: Khi bạn đăng nhập bằng Facebook, chúng tôi nhận được tên, địa chỉ email
          và Facebook ID từ Facebook, theo cài đặt tài khoản Facebook của bạn.
        </li>
      </ul>

      <h2>2. Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn</h2>
      <p>Chúng tôi sử dụng thông tin thu thập được cho các mục đích sau:</p>
      <ul>
        <li>
          <strong>Cung Cấp và Cải Thiện Dịch Vụ</strong>: Để xác thực tài khoản, xử lý đăng nhập và nâng cao chức năng
          của Trang web.
        </li>
        <li>
          <strong>Cá Nhân Hóa Trải Nghiệm</strong>: Để tùy chỉnh nội dung và tính năng dựa trên sở thích và tương tác
          của bạn.
        </li>
        <li>
          <strong>Liên Lạc Với Bạn</strong>: Để trả lời các câu hỏi của bạn, cung cấp hỗ trợ khách hàng và gửi thông báo
          liên quan đến dịch vụ.
        </li>
        <li>
          <strong>Phân Tích và Tối Ưu Hóa</strong>: Để hiểu cách người dùng tương tác với Dịch vụ, cải thiện hiệu suất
          và khắc phục sự cố.
        </li>
        <li>
          <strong>Đảm Bảo An Toàn</strong>: Để phát hiện và ngăn chặn gian lận, truy cập trái phép và các hoạt động độc
          hại khác.
        </li>
        <li>
          <strong>Tuân Thủ Nghĩa Vụ Pháp Lý</strong>: Để đáp ứng các yêu cầu quy định và trả lời các yêu cầu pháp lý.
        </li>
      </ul>

      <h2>3. Cách Chúng Tôi Chia Sẻ Thông Tin Của Bạn</h2>
      <p>
        Chúng tôi không bán thông tin cá nhân của bạn. Chúng tôi có thể chia sẻ thông tin của bạn trong các trường hợp
        sau:
      </p>
      <ul>
        <li>
          <strong>Với Nhà Cung Cấp Dịch Vụ</strong>: Chúng tôi làm việc với các nhà cung cấp bên thứ ba đáng tin cậy (ví
          dụ: dịch vụ lưu trữ như Render, Vercel hoặc nhà cung cấp cơ sở dữ liệu) để vận hành Dịch vụ. Các nhà cung cấp
          này có nghĩa vụ hợp đồng bảo vệ dữ liệu của bạn.
        </li>
        <li>
          <strong>Với Nhà Cung Cấp Đăng Nhập Bên Thứ Ba</strong>: Khi bạn sử dụng Google hoặc Facebook để đăng nhập,
          chúng tôi chia sẻ thông tin hạn chế (ví dụ: mã thông báo truy cập) với các nhà cung cấp này để xác thực danh
          tính của bạn.
        </li>
        <li>
          <strong>Vì Mục Đích Pháp Lý</strong>: Chúng tôi có thể tiết lộ thông tin của bạn để tuân thủ các luật, quy
          định hoặc quy trình pháp lý hiện hành (ví dụ: lệnh triệu tập hoặc lệnh tòa).
        </li>
        <li>
          <strong>Trong Giao Dịch Kinh Doanh</strong>: Nếu chúng tôi trải qua quá trình sáp nhập, mua lại hoặc bán tài
          sản, thông tin của bạn có thể được chuyển giao như một phần của giao dịch, với các biện pháp bảo vệ quyền
          riêng tư của bạn.
        </li>
      </ul>

      <h2>4. Lựa Chọn và Quyền Của Bạn</h2>
      <p>Bạn có một số quyền và lựa chọn liên quan đến thông tin cá nhân của mình:</p>
      <ul>
        <li>
          <strong>Truy Cập và Cập Nhật</strong>: Bạn có thể truy cập và cập nhật thông tin tài khoản bằng cách đăng nhập
          vào Trang web.
        </li>
        <li>
          <strong>Tắt Cookies</strong>: Bạn có thể vô hiệu hóa cookies thông qua cài đặt trình duyệt, mặc dù điều này có
          thể ảnh hưởng đến chức năng của Dịch vụ.
        </li>
        <li>
          <strong>Đăng Nhập Bên Thứ Ba</strong>: Bạn có thể thu hồi quyền truy cập vào đăng nhập Google hoặc Facebook
          thông qua cài đặt tài khoản trên các nền tảng đó.
        </li>
        <li>
          <strong>Quyền GDPR (Cư dân EU)</strong>: Nếu bạn ở Khu vực Kinh tế Châu Âu, bạn có quyền truy cập, sửa chữa,
          xóa hoặc hạn chế xử lý dữ liệu của mình, cũng như quyền chuyển giao dữ liệu. Liên hệ với chúng tôi tại{' '}
          <a href="mailto:nghialamngocit@gmail.com">nghialamngocit@gmail.com</a> để thực hiện các quyền này.
        </li>
        <li>
          <strong>Quyền CCPA (Cư dân California)</strong>: Nếu bạn là cư dân California, bạn có quyền yêu cầu thông tin
          về việc thu thập, sử dụng và tiết lộ thông tin cá nhân của mình. Bạn cũng có thể yêu cầu xóa dữ liệu của mình.
          Liên hệ với chúng tôi tại <a href="mailto:nghialamngocit@gmail.com">nghialamngocit@gmail.com</a>.
        </li>
      </ul>

      <h2>5. Bảo Mật Dữ Liệu</h2>
      <p>
        Chúng tôi thực hiện các biện pháp kỹ thuật và tổ chức hợp lý để bảo vệ thông tin cá nhân của bạn khỏi truy cập
        trái phép, mất mát hoặc lạm dụng. Các biện pháp này bao gồm:
      </p>
      <ul>
        <li>Mã hóa dữ liệu trong quá trình truyền bằng HTTPS.</li>
        <li>Lưu trữ an toàn các mã thông báo xác thực.</li>
        <li>Giám sát và cập nhật hệ thống thường xuyên.</li>
      </ul>
      <p>
        Tuy nhiên, không có hệ thống nào hoàn toàn an toàn, và chúng tôi không thể đảm bảo an toàn tuyệt đối cho thông
        tin của bạn. Bạn chịu trách nhiệm giữ bí mật thông tin đăng nhập tài khoản của mình.
      </p>

      <h2>6. Lưu Trữ Dữ Liệu</h2>
      <p>
        Chúng tôi lưu giữ thông tin cá nhân của bạn trong thời gian cần thiết để cung cấp Dịch vụ, tuân thủ các nghĩa vụ
        pháp lý, giải quyết tranh chấp và thực thi các thỏa thuận của chúng tôi. Ví dụ:
      </p>
      <ul>
        <li>Thông tin tài khoản được lưu giữ trong khi tài khoản của bạn còn hoạt động.</li>
        <li>Dữ liệu sử dụng có thể được giữ lại cho mục đích phân tích dưới dạng ẩn danh.</li>
        <li>Nếu bạn yêu cầu xóa, chúng tôi sẽ xóa thông tin cá nhân của bạn trừ khi luật pháp yêu cầu giữ lại.</li>
      </ul>

      <h2>7. Dịch Vụ Bên Thứ Ba</h2>
      <p>
        Dịch vụ của chúng tôi tích hợp với các dịch vụ bên thứ ba, chẳng hạn như Google và Facebook, để xác thực. Các
        dịch vụ này có chính sách bảo mật riêng:
      </p>
      <ul>
        <li>
          <strong>Google</strong>: <a href="https://policies.google.com/privacy">Chính Sách Bảo Mật của Google</a>
        </li>
        <li>
          <strong>Facebook</strong>: <a href="https://www.facebook.com/privacy/policy/">Chính Sách Bảo Mật của Meta</a>
        </li>
      </ul>
      <p>
        Chúng tôi không chịu trách nhiệm về các hoạt động bảo mật của các bên thứ ba này. Chúng tôi khuyến khích bạn xem
        xét chính sách của họ trước khi sử dụng dịch vụ đăng nhập của họ.
      </p>

      <h2>8. Chuyển Giao Dữ Liệu Quốc Tế</h2>
      <p>
        Thông tin của bạn có thể được xử lý trên các máy chủ nằm ngoài quốc gia cư trú của bạn, bao gồm tại Hoa Kỳ.
        Chúng tôi đảm bảo rằng mọi chuyển giao dữ liệu quốc tế tuân thủ các luật bảo vệ dữ liệu hiện hành, chẳng hạn như
        các biện pháp bảo vệ GDPR cho cư dân EU.
      </p>

      <h2>9. Quyền Riêng Tư Của Trẻ Em</h2>
      <p>
        Dịch vụ của chúng tôi không dành cho cá nhân dưới 13 tuổi (hoặc 16 tuổi ở một số khu vực pháp lý). Chúng tôi
        không cố ý thu thập thông tin cá nhân từ trẻ em. Nếu chúng tôi biết rằng mình đã thu thập thông tin như vậy,
        chúng tôi sẽ thực hiện các bước để xóa nó ngay lập tức.
      </p>

      <h2>10. Thay Đổi Chính Sách Bảo Mật Này</h2>
      <p>
        Chúng tôi có thể cập nhật Chính Sách Bảo Mật này theo thời gian để phản ánh những thay đổi trong hoạt động của
        chúng tôi hoặc các yêu cầu pháp lý. Chúng tôi sẽ thông báo cho bạn về những thay đổi quan trọng bằng cách đăng
        chính sách đã cập nhật trên Trang web và cập nhật ngày "Cập nhật lần cuối" ở đầu trang. Việc bạn tiếp tục sử
        dụng Dịch vụ sau những thay đổi này đồng nghĩa với việc chấp nhận chính sách đã sửa đổi.
      </p>

      <h2>11. Liên Hệ Với Chúng Tôi</h2>
      <p>
        Nếu bạn có câu hỏi, mối quan ngại hoặc yêu cầu liên quan đến Chính Sách Bảo Mật này hoặc các hoạt động dữ liệu
        của chúng tôi, vui lòng liên hệ với chúng tôi tại:
      </p>

      <p>Đối với các yêu cầu GDPR hoặc CCPA, vui lòng ghi "Yêu Cầu Bảo Mật" trong dòng tiêu đề.</p>
      {/* Thêm toàn bộ nội dung Chính Sách Bảo Mật đã dịch */}
      <p>
        Liên hệ với chúng tôi tại <a href="mailto:nghialamngocit@gmail.com">nghialamngocit@gmail.com</a>.
      </p>
      <Link to="/" className="text-blue-500">
        Quay lại Trang chủ
      </Link>
    </div>
  )
}
