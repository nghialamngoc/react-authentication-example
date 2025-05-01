import { Link } from 'react-router-dom'

export const TermsOfUse = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Điều Khoản Sử Dụng</h1>
      <p>
        <strong>Cập nhật lần cuối: 01/05/2025</strong>
      </p>
      <p>
        Chào mừng bạn đến với <strong>Bếu Béo Accessory</strong>! Các Điều Khoản Sử Dụng này ("Điều Khoản") quy định
        việc sử dụng trang web của chúng tôi tại{' '}
        <a href="https://react-authentication-example.vercel.app">https://react-authentication-example.vercel.app</a>{' '}
        ("Trang web") và các dịch vụ liên quan (gọi chung là "Dịch vụ"). Bằng cách truy cập hoặc sử dụng Dịch vụ, bạn
        đồng ý tuân thủ các Điều Khoản này và tất cả các luật, quy định hiện hành. Nếu bạn không đồng ý với các Điều
        Khoản này, vui lòng không sử dụng Dịch vụ.
      </p>

      <h2>1. Chấp Nhận Điều Khoản</h2>
      <p>
        Bằng cách sử dụng Dịch vụ, bạn xác nhận rằng bạn ít nhất 13 tuổi (hoặc 16 tuổi ở một số khu vực pháp lý) và có
        đủ năng lực pháp lý để đồng ý với các Điều Khoản này. Nếu bạn sử dụng Dịch vụ thay mặt cho một tổ chức, bạn xác
        nhận rằng bạn có quyền đại diện cho tổ chức đó.
      </p>

      <h2>2. Dịch Vụ Của Chúng Tôi</h2>
      <p>
        <strong>Bếu Béo Accessory</strong> cung cấp nền tảng trực tuyến cho phép người dùng đăng nhập bằng email,
        Google, hoặc Facebook để truy cập các tính năng và nội dung của Trang web. Chúng tôi có quyền sửa đổi, tạm ngừng
        hoặc chấm dứt bất kỳ phần nào của Dịch vụ mà không cần thông báo trước, theo quyết định riêng của chúng tôi.
      </p>

      <h2>3. Tài Khoản Người Dùng</h2>
      <h3>3.1. Đăng Ký Tài Khoản</h3>
      <ul>
        <li>
          Để sử dụng một số tính năng của Dịch vụ, bạn có thể cần tạo tài khoản bằng cách cung cấp địa chỉ email và mật
          khẩu hoặc đăng nhập qua Google/Facebook.
        </li>
        <li>Bạn chịu trách nhiệm cung cấp thông tin chính xác, cập nhật và bảo mật thông tin đăng nhập của mình.</li>
        <li>Bạn không được chia sẻ tài khoản hoặc thông tin đăng nhập với người khác.</li>
      </ul>
      <h3>3.2. Chấm Dứt Tài Khoản</h3>
      <ul>
        <li>
          Chúng tôi có quyền tạm đình chỉ hoặc chấm dứt tài khoản của bạn nếu bạn vi phạm các Điều Khoản này hoặc tham
          gia vào các hành vi gây hại cho Dịch vụ hoặc người dùng khác.
        </li>
        <li>
          Bạn có thể xóa tài khoản của mình bất kỳ lúc nào bằng cách liên hệ với chúng tôi tại{' '}
          <a href="mailto:nghialamngocit@gmail.com">nghialamngocit@gmail.com</a>.
        </li>
      </ul>

      <h2>4. Hành Vi Người Dùng</h2>
      <p>Khi sử dụng Dịch vụ, bạn đồng ý:</p>
      <ul>
        <li>Không sử dụng Dịch vụ cho bất kỳ mục đích bất hợp pháp hoặc trái phép.</li>
        <li>
          Không tải lên, chia sẻ hoặc phân phối nội dung vi phạm quyền sở hữu trí tuệ, quyền riêng tư, hoặc các quyền
          khác của bất kỳ bên nào.
        </li>
        <li>Không tham gia vào các hành vi như gửi thư rác, hack, hoặc phát tán mã độc.</li>
        <li>Không giả mạo danh tính hoặc cung cấp thông tin sai lệch.</li>
      </ul>
      <p>
        Chúng tôi có quyền xóa bất kỳ nội dung nào bạn gửi hoặc hạn chế quyền truy cập của bạn nếu bạn vi phạm các quy
        tắc này.
      </p>

      <h2>5. Quyền Sở Hữu Trí Tuệ</h2>
      <ul>
        <li>
          <strong>Nội Dung Của Chúng Tôi</strong>: Tất cả nội dung, logo, thiết kế và mã nguồn trên Trang web thuộc sở
          hữu của <strong>Bếu Béo Accessory</strong> hoặc các bên cấp phép của chúng tôi, được bảo vệ bởi luật bản quyền
          và sở hữu trí tuệ.
        </li>
        <li>
          <strong>Nội Dung Của Bạn</strong>: Bằng cách gửi nội dung lên Dịch vụ (nếu có), bạn cấp cho chúng tôi quyền
          không độc quyền, miễn phí để sử dụng, sao chép, hiển thị và phân phối nội dung đó nhằm cung cấp Dịch vụ.
        </li>
        <li>
          Bạn không được sao chép, sửa đổi, hoặc phân phối nội dung của chúng tôi mà không có sự cho phép bằng văn bản
          từ chúng tôi.
        </li>
      </ul>

      <h2>6. Tích Hợp Bên Thứ Ba</h2>
      <p>
        Dịch vụ của chúng tôi tích hợp với các nền tảng bên thứ ba như Google và Facebook để đăng nhập. Việc sử dụng các
        dịch vụ này tuân theo các điều khoản và chính sách riêng của họ:
      </p>
      <ul>
        <li>
          <strong>Google</strong>: <a href="https://policies.google.com/terms">Điều Khoản Dịch Vụ của Google</a>
        </li>
        <li>
          <strong>Facebook</strong>: <a href="https://www.facebook.com/terms">Điều Khoản Dịch Vụ của Meta</a>
        </li>
      </ul>
      <p>Chúng tôi không chịu trách nhiệm về các hoạt động hoặc nội dung của các dịch vụ bên thứ ba.</p>

      <h2>7. Giới Hạn Trách Nhiệm</h2>
      <ul>
        <li>
          Dịch vụ được cung cấp trên cơ sở "nguyên trạng" và "theo khả năng". Chúng tôi không đảm bảo rằng Dịch vụ sẽ
          không bị gián đoạn, không có lỗi, hoặc hoàn toàn an toàn.
        </li>
        <li>
          Trong phạm vi tối đa được pháp luật cho phép, <strong>Bếu Béo Accessory</strong> không chịu trách nhiệm đối
          với bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hoặc hậu quả nào phát sinh từ việc sử dụng Dịch vụ.
        </li>
      </ul>

      <h2>8. Bồi Thường</h2>
      <p>
        Bạn đồng ý bồi thường và giữ cho <strong>Bếu Béo Accessory</strong>, các đối tác, và nhân viên của chúng tôi
        không phải chịu trách nhiệm đối với bất kỳ khiếu nại, thiệt hại, hoặc chi phí nào phát sinh từ việc bạn vi phạm
        các Điều Khoản này hoặc sử dụng Dịch vụ không đúng cách.
      </p>

      <h2>9. Thay Đổi Điều Khoản</h2>
      <p>
        Chúng tôi có thể cập nhật các Điều Khoản này theo thời gian để phản ánh những thay đổi trong Dịch vụ hoặc các
        yêu cầu pháp lý. Chúng tôi sẽ thông báo về các thay đổi quan trọng bằng cách đăng Điều Khoản đã cập nhật trên
        Trang web và cập nhật ngày "Cập nhật lần cuối" ở đầu trang. Việc bạn tiếp tục sử dụng Dịch vụ sau những thay đổi
        này đồng nghĩa với việc chấp nhận các Điều Khoản đã sửa đổi.
      </p>

      <h2>10. Chấm Dứt</h2>
      <p>
        Chúng tôi có quyền chấm dứt hoặc hạn chế quyền truy cập của bạn vào Dịch vụ bất kỳ lúc nào, với hoặc không có
        thông báo, nếu bạn vi phạm các Điều Khoản này hoặc vì bất kỳ lý do nào khác theo quyết định của chúng tôi.
      </p>

      <h2>11. Luật Áp Dụng</h2>
      <p>
        Các Điều Khoản này được điều chỉnh bởi luật pháp Việt Nam. Bất kỳ tranh chấp nào phát sinh từ hoặc liên quan đến
        các Điều Khoản này sẽ được giải quyết tại các tòa án có thẩm quyền tại Việt Nam.
      </p>

      <h2>12. Liên Hệ Với Chúng Tôi</h2>
      <p>Nếu bạn có câu hỏi hoặc thắc mắc về các Điều Khoản này, vui lòng liên hệ với chúng tôi tại:</p>
      <div className="contact bg-gray-100 p-4 rounded">
        <p>
          <strong>Email</strong>: <a href="mailto:nghialamngocit@gmail.com">nghialamngocit@gmail.com</a>
        </p>
      </div>

      <p className="mt-6 font-bold">Kết Thúc Điều Khoản Sử Dụng</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Quay lại Trang chủ
      </Link>
    </div>
  )
}
