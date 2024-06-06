/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Color",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M9.75 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3 1a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.5 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM13.25 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm.45-11a7.82 7.82 0 0 0-7.93.17 9.6 9.6 0 0 0-3.25 3.89 5.9 5.9 0 0 0-.62 2.43c0 .8.27 1.57.94 2.12.61.5 1.14.74 1.66.77.51.02.92-.19 1.23-.37l.2-.12c.24-.15.44-.27.69-.35.28-.09.64-.12 1.16.04.19.06.3.14.38.24.09.1.16.26.2.47.06.21.09.46.1.76.02.1.02.24.03.37l.04.58c.05.67.17 1.44.57 2.14.42.7 1.1 1.3 2.2 1.68 1.6.54 3.07.1 4.21-.8a7.46 7.46 0 0 0 2.37-3.6C19.2 9.16 17.68 5.04 13.7 3ZM6.3 4.01a6.82 6.82 0 0 1 6.94-.14c3.5 1.8 4.87 5.4 3.69 9.25a6.46 6.46 0 0 1-2.04 3.1 3.33 3.33 0 0 1-3.26.64c-.9-.3-1.38-.76-1.66-1.24a4 4 0 0 1-.44-1.7l-.04-.54-.02-.41c-.03-.31-.06-.63-.13-.93-.07-.3-.2-.6-.4-.86-.22-.26-.5-.46-.87-.57a2.85 2.85 0 0 0-1.75-.03c-.38.12-.7.32-.95.47l-.14.09c-.29.16-.48.24-.68.23-.22-.01-.55-.12-1.08-.55-.38-.31-.57-.76-.57-1.34 0-.6.19-1.29.52-2.01A8.63 8.63 0 0 1 6.3 4.02Z";
   var pathdfilled = "M5.77 3.17a7.82 7.82 0 0 1 7.93-.18c3.97 2.04 5.5 6.16 4.18 10.44a7.46 7.46 0 0 1-2.37 3.59 4.32 4.32 0 0 1-4.2.8 3.84 3.84 0 0 1-2.2-1.68c-.41-.7-.53-1.47-.58-2.14l-.04-.58-.02-.37c-.02-.3-.05-.55-.1-.76a1.16 1.16 0 0 0-.2-.47.75.75 0 0 0-.4-.24 1.86 1.86 0 0 0-1.15-.04c-.25.08-.45.2-.69.35l-.2.12c-.31.18-.72.4-1.23.37a2.91 2.91 0 0 1-1.66-.77 2.63 2.63 0 0 1-.94-2.12c0-.79.25-1.63.62-2.43a9.6 9.6 0 0 1 3.25-3.9Zm3.98 3.58a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.5 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});