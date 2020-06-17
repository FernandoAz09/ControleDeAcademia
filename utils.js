module.exports = {
    age: function(timestamp) {
            const today = new Date()
            const birthDate = new Date(timestamp)
        
            let age = today.getFullYear() - birthDate.getFullYear()
            const month = today.getMonth() - birthDate.getMonth()
        
            if (month < 0 || 
                month == 0 && 
                today.getDate() <= birthDate.getDate()) {
                age = age - 1
            }
        
            return age
    },
    date: function(timestamp) {
            const date = new Date(timestamp)
            
            // Year
            const year = date.getUTCFullYear()
            // Month
            const month = date.getUTCMonth() + 1
            // Day
            const day = date.getUTCDate()

            // Year / Month / Day
            return `${year}-${month}-${day}`
    }
}