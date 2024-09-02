$(document).ready(function () {
    let selectedRating = 0;
    $('#starRating .star').on('click', function () {
        selectedRating = $(this).data('value');
        $('#starRating .star').removeClass('selected');
        $(this).addClass('selected').prevAll().addClass('selected');
    });
    $('#feedbackForm').on('submit', function (e) {
        e.preventDefault();
        if (selectedRating === 0) {
            alert('Please select a star rating.');
            return;
        }
        let comments = $('#comments').val().trim();
        if (comments === '') {
            comments = 'No additional comments provided.';
        }
        alert(`Thank you for your feedback!\nRating: ${selectedRating} star(s)\nComments: ${comments}`);
        $('#feedbackForm')[0].reset();
        $('#starRating .star').removeClass('selected');
        selectedRating = 0;
    });
});
