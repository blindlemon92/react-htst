const token = '2b278535f5013f7351dcbe576ffc76565a7646be32aaffbf';

export const server_calls = {
    get: async () => {
      const response = await fetch(`https://childish-leaf-reminder.glitch.me/api/sodas`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${token}`
          
        }
    });
    if(!response.ok) {
        throw new Error('Something went wrong');
    }
    return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://childish-leaf-reminder.glitch.me/api/sodas`,{
            method : 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    if(!response.ok) {
        throw new Error(`Something went wrong adding this car`)
    }
    return await response.json()
},

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://childish-leaf-reminder.glitch.me/api/sodas/${id}`,{
            method : 'PUT',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok) {
        throw new Error(`Something went wrong updating this car`)
        }
    },
    delete: async(id: string) => {
        const response = await fetch(`https://childish-leaf-reminder.glitch.me/api/sodas/${id}`,{
            method : 'DELETE',

            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if(!response.ok) {
            throw new Error(`Something went wrong deleting this car`)
        }
      }
} 