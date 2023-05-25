// export const postUpload = async (formData) => {
//   try {
//     const { data } = await client.post("/api/posts/upload", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     // if (data.status === 200) {
//     //   return data.data;
//     // }
//     return data;
//   } catch (e) {
//     console.error(e);
//   }
// };

//   const handleConfirm = async e => {
//     setShowModal(false);
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('image', photo);
//     formData.append('nickname', nickname);
//     formData.append('comment', comment);
//     try {
//       //   const url = 'http://서버주소/게시글_생성_엔드포인트';
//       //   const response = await axios.post(url, formData);
//       const response = await postUpload(formData);
//       console.log(response);
//       if (response.status === 200) {
//         navigate(`/detail/${response.data.postId}`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
