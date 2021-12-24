import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class CardRepository {
    constructor(app) {
    this.db = getDatabase(app);
    }
    syncCards(userId, onUpdate) {
        const query = ref(this.db, `${userId}/cards`);
        onValue(query, (snapshot) => {
        const value = snapshot.val();
        value && onUpdate(value);
        });
        return () => off(query);
    }
    saveCard(userId, card) {
        set(ref(this.db, `${userId}/cards/${card.id}`), card);
    }

    removeCard(userId, card) {
        remove(ref(this.db, `${userId}/cards/${card.id}`));
    }
}

export default CardRepository;