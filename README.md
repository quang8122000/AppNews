# Week1\_ {Vinh Quang}

** NewsApp ** hiển thị các bộ phim mới nhất hiện đang chiếu tại rạp. Ứng dụng sử dụng API cơ sở dữ liệu phim để hiển thị hình ảnh và thông tin cơ bản về những bộ phim này cho người dùng.

Thời gian đã sử dụng: Tổng cộng ** X ** giờ đã sử dụng

## Câu chuyện của người dùng

Chức năng ** bắt buộc ** sau đây đã hoàn thành:

- [x] User can enter a search query that will display a grid of news articles using the thumbnail and headline from the New York Times Search API. (3 points)
- [x] User can click on "filter" icon which allows selection of advanced search options to filter articles. (3 points)
      An example of a query with filters (begin_date, sort, and news_desk) applied can be found here. Full details of the API can be found on this article search README.
- [x] User can configure advanced search filters such as: (points included above)
      Begin Date (using a date picker)
      Sort order (oldest or newest) using a spinner dropdown
      News desk values (Arts, Fashion & Style, Sports) using checkboxes
  - [x] TSubsequent searches will have any filters applied to the search results. (1 point)
  - [x] TUser can tap on any article in results to view the contents in an embedded browser. (2 points)
- [x] User can scroll down "infinitely" to continue loading more news articles. The maximum number of articles is limited by the API search. (1 point)
- [x] User can click a article detail WebView screen custom. (1 point)
- [x]AppCenter code push (2 points)

Các tính năng ** tùy chọn ** sau được triển khai:

- [] Remove button Search, enter text auto filter not rerender continuously. (3 point)

- [x] Robust error handling, check if internet is available, handle error cases, network failures. (1 point)
- [] User can share a link to their friends or email it to themselves. (1 point)
- [x] Replace Filter Settings Screen with a lightweight modal. (2 points)
  - [x] Stretch: For different news articles that only have text or have text with thumbnails (2 points)
  - [] Save filter with redux-persist (3 points)
  - [x] mproved arbitrary user interface or function, improved your code (1 to 5 point)
-

## Video Hướng dẫn

Dưới đây là hướng dẫn về các câu chuyện người dùng đã triển khai:

https://user-images.githubusercontent.com/67914761/118592866-e223a700-b7d0-11eb-801e-f43c9060602b.mp4

https://user-images.githubusercontent.com/67914761/118592874-e4860100-b7d0-11eb-9bab-33dd4a27e8f1.mp4

GIF được tạo bằng [AZ Screen Recorder] (https://play.google.com/store/apps/details?id=com.hecorat.screenrecorder.free&hl=vi).

## Ghi chú

Mô tả mọi thách thức gặp phải khi xây dựng ứng dụng.

## Thư viện mã nguồn mở được sử dụng

-

## Giấy phép

    Bản quyền [yyyy] [tên của chủ sở hữu bản quyền]

    Được cấp phép theo Giấy phép Apache, Phiên bản 2.0 ("Giấy phép");
    bạn không thể sử dụng tệp này trừ khi tuân thủ Giấy phép.
    Bạn có thể nhận được một bản sao của Giấy phép tại

        http://www.apache.org/licenses/LICENSE-2.0

    Trừ khi luật hiện hành yêu cầu hoặc được đồng ý bằng văn bản, phần mềm
    được phân phối theo Giấy phép được phân phối trên CƠ SỞ "NGUYÊN TẮC",
    KHÔNG CÓ BẢO ĐẢM HOẶC ĐIỀU KIỆN BẤT KỲ HÌNH THỨC NÀO, dù rõ ràng hay ngụ ý.
    Xem Giấy phép để biết các quyền điều chỉnh ngôn ngữ cụ thể và
    các giới hạn theo Giấy phép.
