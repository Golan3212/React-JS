import { formatTimeStrings } from "../utils/formatTimeString";

describe('formatTimeString test', ()=>{
    it('returns None if no opening hours passed', ()=>{
        const expected = 'None';
        const recieved = formatTimeStrings([]);

        expect(recieved).toEqual(expected);

    });

    it( "returns 'start - Till tomorrow' if only one opening hours passed", () => {
        const openingHours = ["12-00"];
        const expected = `${openingHours[0]} - Till tomorrow`;
        const recieved = formatTimeStrings(openingHours);
        expect(recieved).toEqual(expected)
    });

    it("returns 'start - end' if more than one opening hours passed", () => {
        const openingHours = ["12:00", "15:00", "20:00", "", "22:44"];
        const expected = `${openingHours[0]} - ${openingHours[4]}`;
        const recieved = formatTimeStrings(openingHours);

        expect(recieved).toEqual(expected)
    })
})