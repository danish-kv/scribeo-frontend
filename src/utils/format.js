export const formatDate = (dateString) => {
    
    const date = new Date(Date.parse(dateString)); 
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  
  