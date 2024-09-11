const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormsFields({...formFields, [name]: value});
};

const handleSubmit= (e) => {
    if(validate()){
        const formData = new FormData();
        formData.append('form-name', 'contact');
        Object.keys(formFields).forEach(key => {
        formData.append(key, formFields[key]);
    });
};


    // Use Axios to submit the form data
  axios({
    method: 'post',
    url: '/', // Your form's Netlify action URL; adjust if necessary
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  .then(response => {
    console.log('Form submitted successfully:', response);
    setIsSubmitted(true);
  })
  .catch(error => {
    console.error('Form submission error:', error);
  });
}