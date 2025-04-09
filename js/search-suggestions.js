document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const suggestionsBox = document.getElementById("suggestions-box");

    // Hàm hiển thị gợi ý khi nhập từ khóa
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            suggestionsBox.innerHTML = "";
            suggestionsBox.style.display = "none";
            return;
        }

        let suggestionsHTML = "";
        let count = 0; // Giới hạn số lượng gợi ý

        for (let id in movies) {
            if (movies[id].title.toLowerCase().includes(query)) {
                suggestionsHTML += `
                    <div class="suggestion-item" data-id="${id}">
                        <img src="${movies[id].poster}" alt="${movies[id].title}">
                        <span>${movies[id].title}</span>
                    </div>
                `;
                count++;
            }
            if (count >= 5) break; // Giới hạn hiển thị tối đa 5 gợi ý
        }

        if (suggestionsHTML) {
            suggestionsBox.innerHTML = suggestionsHTML;
            suggestionsBox.style.display = "block";
        } else {
            suggestionsBox.innerHTML = "<p class='no-results'>Không tìm thấy phim</p>";
            suggestionsBox.style.display = "block";
        }
    });

    // Chuyển hướng đến `play.html` khi click vào gợi ý
    suggestionsBox.addEventListener("click", function (e) {
        const selectedMovie = e.target.closest(".suggestion-item");
        if (selectedMovie) {
            const movieId = selectedMovie.getAttribute("data-id");
            window.location.href = `play/play.html?id=${movieId}`;
        }
    });

    // Ẩn gợi ý khi click bên ngoài
    document.addEventListener("click", function (e) {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.style.display = "none";
        }
    });
});