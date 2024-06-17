/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Ram",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.04 4c.26 0 .5.05.74.16A2.06 2.06 0 0 1 18 5.96V11a2 2 0 0 1-1 1.73v1.77a1.45 1.45 0 0 1-.44 1.05c-.13.14-.3.25-.48.33-.19.09-.38.13-.58.12h-4a.48.48 0 0 1-.35-.15L10 14.7l-1.15 1.15c-.1.1-.21.15-.35.15h-4a1.45 1.45 0 0 1-1.05-.44c-.14-.13-.25-.3-.33-.48A1.32 1.32 0 0 1 3 14.5v-1.77c-.3-.17-.55-.42-.73-.73A2.06 2.06 0 0 1 2 11V5.96c0-.26.05-.5.16-.74A2.06 2.06 0 0 1 3.96 4h12.08ZM17 6a.95.95 0 0 0-.08-.38 1.1 1.1 0 0 0-.2-.32A1 1 0 0 0 16 5H3.99a.97.97 0 0 0-.7.29c-.1.09-.16.2-.22.32A.85.85 0 0 0 3 6v5c0 .14.03.27.08.4.05.11.12.22.2.31.1.1.2.16.32.21.12.05.25.07.4.08h12a.97.97 0 0 0 .7-.29c.1-.09.16-.2.22-.32A.85.85 0 0 0 17 11V6Zm-2 0c.14 0 .26.03.38.08s.23.12.32.2A1 1 0 0 1 16 7v3.01a.97.97 0 0 1-.29.7c-.09.1-.2.16-.32.22A.85.85 0 0 1 15 11H5a.97.97 0 0 1-.4-.08 1.1 1.1 0 0 1-.31-.2.85.85 0 0 1-.21-.32A1.2 1.2 0 0 1 4 10V7a.97.97 0 0 1 .29-.7c.09-.1.2-.16.32-.22A.85.85 0 0 1 5 6h10ZM7.5 7H5v3h2.5V7Zm4 3V7h-3v3h3Zm1 0H15V7h-2.5v3Zm3.5 3H4v1.5c0 .14.05.25.15.35.1.1.21.15.35.15h3.8l1.35-1.35c.1-.1.21-.15.35-.15.14 0 .25.05.35.15L11.71 15h3.79c.14 0 .25-.05.35-.15.1-.1.15-.21.15-.35V13Z",
    FILLED : "M5 7h2.5v3H5V7Zm6.5 0v3h-3V7h3Zm1 3H15V7h-2.5v3Zm3.54-6c.26 0 .5.05.74.16A2.06 2.06 0 0 1 18 5.96V11a2 2 0 0 1-1 1.73v1.77a1.45 1.45 0 0 1-.44 1.05c-.13.14-.3.25-.48.33-.19.09-.38.13-.58.12h-4a.48.48 0 0 1-.35-.15L10 14.7l-1.15 1.15c-.1.1-.21.15-.35.15h-4a1.45 1.45 0 0 1-1.05-.44c-.14-.13-.25-.3-.33-.48A1.32 1.32 0 0 1 3 14.5v-1.77c-.3-.17-.55-.42-.73-.73A2.06 2.06 0 0 1 2 11V5.96c0-.26.05-.5.16-.74A2.06 2.06 0 0 1 3.96 4h12.08Zm-.66 2.08A.95.95 0 0 0 15 6H5a.85.85 0 0 0-.4.08c-.12.06-.22.13-.31.22A1 1 0 0 0 4 7v3c0 .15.03.28.08.4.04.12.12.22.2.31.1.09.21.16.33.21.12.05.25.08.39.08h10c.14 0 .27-.02.4-.08.12-.06.22-.13.31-.22A1 1 0 0 0 16 10V7a1 1 0 0 0-.3-.71 1.1 1.1 0 0 0-.32-.21Z"
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