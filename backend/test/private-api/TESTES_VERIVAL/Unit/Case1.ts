import { NotesService } from '../../../src/lib/notes/notes.service';
import { Note } from '../../../src/lib/notes/note.entity';

describe('NotesService (unit)', () => {
  it('deve criar uma nota com conteúdo válido', async () => {
    const mockNote = new Note();
    mockNote.publicId = '123';
    const noteRepository = { save: jest.fn().mockResolvedValue(mockNote) };

    const revisionsService = {
      createRevision: jest.fn().mockResolvedValue(undefined),
    };

    const service = new NotesService(
      { setContext: jest.fn() } as any, 
      noteRepository as any,
      {} as any, 
      {} as any, 
      {} as any, 
      {} as any, 
      {
        getEveryoneGroup: jest.fn().mockResolvedValue({}),
        getLoggedInGroup: jest.fn().mockResolvedValue({}),
      } as any, 
      revisionsService as any,
      {
        maxDocumentLength: 10000,
        permissions: {
          default: {
            everyone: 'READ',
            loggedIn: 'READ',
          },
        },
        forbiddenNoteIds: [],
      }, 
      { toAliasDto: jest.fn() } as any, 
      {} as any, 
      {} as any, 
      { emit: jest.fn() } as any, 
    );

    const result = await service.createNote('## Minha Nota Teste Unitário', null);

    expect(noteRepository.save).toHaveBeenCalledTimes(1);
    expect(result.publicId).toBe('123');
  });
});
