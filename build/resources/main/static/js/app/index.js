var main = {
    init : function () {
        var _this = this;
        $('#btn-save').on("click", function () {
            _this.save();
        });

        $('#btn-update').on("click", function () {
            _this.update();
        });

        $('#btn-delete').on("click", function () {
            _this.delete();
        });
    },
    save : function () {
        var data = {
            title : $('#title').val(),
            author : $('#author').val(),
            content : $('#content').val()
        };

        $.ajax({
            type : 'POST',
            url : '/api/v1/posts',
            dataType : 'json', // 서버에서 반환 된는 데이터 형식
            contentType : 'application/json; charset=utf-8', // 서버에 보낼 때 서버에게 알려주는 우리가 보내는 데이터 형식
            data : JSON.stringify(data)
        }).done(function () {
            alert('글이 등록되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

    update : function () {
        var data = {
            title : $('#title').val(),
            content : $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/posts/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function (data) {
            alert('글이 수정되었습니다.');
//            console.log(data);
            window.location.href = '/';
        }).fail(function (error){
            alert(JSON.stringify(error));
        });
    },

    delete : function () {
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/posts/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function () {
            alert('글이 삭제되었습니다.');
            window.location.href = '/';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });

    }
}; // 다른 함수와 이름 겹치면 나중에 임포트 하는 자바 스크립트가 덮어씌우기를 하므로
// scope(범위 지정)를 하나의 객체안에서 이루어지게해서 다른 함수와 이름이 겹치는 것을 방지한다.

main.init();