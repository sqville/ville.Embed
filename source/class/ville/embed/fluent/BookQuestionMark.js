/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookQuestionMark",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8ZM8.76 6.4c.19-.19.55-.4 1.24-.4s1.05.21 1.24.4c.2.22.26.47.26.6 0 .45-.27.7-.72.92a7 7 0 0 1-.35.16l-.02.01-.32.15c-.1.05-.24.12-.35.23A.73.73 0 0 0 9.5 9v1a.5.5 0 1 0 1 0v-.85l.04-.02.28-.13h.01a8 8 0 0 0 .4-.18c.54-.27 1.27-.77 1.27-1.82 0-.37-.14-.87-.54-1.28C11.55 5.29 10.91 5 10 5c-.91 0-1.55.29-1.96.72-.4.41-.54.91-.54 1.28a.5.5 0 0 0 1 0 .9.9 0 0 1 .26-.6ZM10 13a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    FILLED : "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm2.76 4.4a.9.9 0 0 0-.26.6.5.5 0 0 1-1 0c0-.37.14-.87.54-1.28C8.45 5.29 9.09 5 10 5c.91 0 1.55.29 1.96.72.4.41.54.91.54 1.28 0 1.05-.73 1.55-1.28 1.82a8 8 0 0 1-.39.18h-.01a5.75 5.75 0 0 0-.32.15V10a.5.5 0 0 1-1 0V9c0-.25.13-.43.24-.53.11-.1.24-.18.35-.23l.32-.15.02-.01a7 7 0 0 0 .35-.16c.45-.22.72-.47.72-.92a.9.9 0 0 0-.26-.6c-.19-.19-.55-.4-1.24-.4s-1.05.21-1.24.4ZM10 13a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});